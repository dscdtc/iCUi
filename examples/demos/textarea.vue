<template>
    <div>
        <ic-flexbox row="16" col="16">
            <ic-flexbox-item>
            <h1 class="title">textarea 输入</h1>
            </ic-flexbox-item>
        </ic-flexbox>
        <ic-textarea :max="50" name="description" :placeholder="'提示'"></ic-textarea>
        <ic-flexbox row="30">
            <ic-flexbox-item>
                <h2>高度自适应</h2>
            </ic-flexbox-item>
        </ic-flexbox>
        <ic-textarea :placeholder="'高度自适应'" :show-counter="false"  autosize></ic-textarea>
        <ic-flexbox row="30">
            <ic-flexbox-item>
                <h2>固定高度</h2>
            </ic-flexbox-item>
        </ic-flexbox>
        <ic-textarea :placeholder="'固定高度'" :show-counter="false" :height="200"></ic-textarea>
    </div>
</template>