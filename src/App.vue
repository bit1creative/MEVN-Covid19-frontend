<template>
    <div id="app">
        <router-view />
    </div>
</template>

<style>
html {
    /* scroll-behavior: smooth; */
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
    cursor: pointer;
    background-color: rgba(229, 231, 235, var(--bg-opacity));
}
::-webkit-scrollbar-track {
    background-color: rgba(229, 231, 235, var(--bg-opacity));
    cursor: pointer;
}
::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #ff1453;
}
@media (prefers-color-scheme: dark) {
    ::-webkit-scrollbar-thumb {
        cursor: pointer;
        background-color: #90b8f8;
    }
}
</style>
