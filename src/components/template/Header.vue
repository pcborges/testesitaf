<template>
    <div class="header">
        <h1 class="title">{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: "Header",
    props: {
        title: String
    }
}
</script>

<style>
    .header {
        grid-area: header;
        background: linear-gradient(to right, #1e469a, #49a7c1);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title {
        color: #fff;
        font-size: 1rem;
        font-weight: 100;
    }
</style>
