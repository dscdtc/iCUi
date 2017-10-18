const MILLISECONDS_SECOND = 1000;
const MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
const MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
const MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;
const COMPONENT_NAME = 'ic-countdown'
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      count: 0,
      counting: false,
      endTime: Date.now(),
    };
  },

  props: {
    autoStart: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: 1000,
    },
    leadingZero: {
      type: Boolean,
      default: true,
    },
    time: {
      type: Number,
      default: 0,
      required: true,
      validator: value => value >= 0,
    },
    tag: {
      type: String,
      default: 'span',
    },
  },

  computed: {
    days() {
      return Math.floor(this.count / MILLISECONDS_DAY);
    },
    hours() {
      return Math.floor((this.count % MILLISECONDS_DAY) / MILLISECONDS_HOUR);
    },
    minutes() {
      return Math.floor((this.count % MILLISECONDS_HOUR) / MILLISECONDS_MINUTE);
    },
    seconds() {
      const { interval } = this;
      const seconds = (this.count % MILLISECONDS_MINUTE) / MILLISECONDS_SECOND;

      if (interval < 10) {
        return seconds.toFixed(3);
      } else if (interval >= 10 && interval < 100) {
        return seconds.toFixed(2);
      } else if (interval >= 100 && interval < 1000) {
        return seconds.toFixed(1);
      }

      return Math.floor(seconds);
    },
    totalDays() {
      return this.days;
    },
    totalHours() {
      return Math.floor(this.count / MILLISECONDS_HOUR);
    },
    totalMinutes() {
      return Math.floor(this.count / MILLISECONDS_MINUTE);
    },
    totalSeconds() {
      return Math.floor(this.count / MILLISECONDS_SECOND);
    },
  },

  render(createElement) {
    const preprocess = value => (this.leadingZero && value < 10 ? `0${value}` : value);

    return createElement(this.tag, this.$scopedSlots.default ? [
      this.$scopedSlots.default({
        days: preprocess(this.days),
        hours: preprocess(this.hours),
        minutes: preprocess(this.minutes),
        seconds: preprocess(this.seconds),
        totalDays: this.totalDays,
        totalHours: this.totalHours,
        totalMinutes: this.totalMinutes,
        totalSeconds: this.totalSeconds,
      }),
    ] : this.$slots.default);
  },

  created() {
    this.init();
  },

  mounted() {
    if (this.autoStart) {
      this.start();
    }

    window.addEventListener('focus', (this.onFocus = this.update.bind(this)));
  },

  beforeDestroy() {
    window.removeEventListener('focus', this.onFocus);
    clearTimeout(this.timeout);
  },

  watch: {
    time() {
      this.init();
    },
  },

  methods: {
    init() {
      const { time } = this;

      if (time > 0) {
        this.count = time;
        this.endTime = Date.now() + time;
      }
    },
    start() {
      if (this.counting) {
        return;
      }
      this.$emit('countdownstart');
      this.counting = true;
      this.step();
    },
    step() {
      if (!this.counting) {
        return;
      }
      this.$emit('countdownprogress', {
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
      });

      if (this.count > 0) {
        const { interval } = this;

        this.timeout = setTimeout(() => {
          this.count -= interval;
          this.step();
        }, interval);
      } else {
        this.count = 0;
        this.stop();
      }
    },
    stop() {
      this.counting = false;
      this.timeout = undefined;
      this.$emit('countdownend');
    },
    update() {
      this.count = Math.max(0, this.endTime - Date.now());
    },
  },
};