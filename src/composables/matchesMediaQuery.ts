import { ref, onMounted, onUnmounted } from 'vue';

export function matchesMediaQuery(queryString: string) {
  let mql: MediaQueryList | null = null;
  const matches = ref(false);

  const update = (event: MediaQueryListEvent) => {
    matches.value = event.matches;
  };

  onMounted(() => {
    mql = window.matchMedia(queryString);
    matches.value = mql.matches;
    mql.addEventListener('change', update, { passive: true });
  });

  onUnmounted(() => { mql?.removeEventListener('change', update) });

  return matches;
}