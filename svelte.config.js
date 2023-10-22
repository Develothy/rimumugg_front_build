import adapter from '@sveltejs/adapter-static';

export default {
    preprocess: [
        sveltePreprocess(), // Svelte Preprocess 설정
        require('@sveltejs/adapter-static'), // Static adapter 설정
    ],
    kit: {
        adapter: adapter(),
        // 다른 설정 옵션들
        paths: {
            '/': 'index.svelte',
            '/summoner': 'summoner.svelte' //쿼리 파라미터 경로 받음
        }
    }
};
