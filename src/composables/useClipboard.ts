// * Clipboard related functions

export function useClipboard() {
  async function copyToClipboard(textToCopy: string | number) {
    try {
      await navigator.clipboard.writeText(textToCopy.toString());
      console.debug(`Copied to clipboard using Clipboard API:`, textToCopy);
    } catch (error) {
      console.error(`Failed to copy to clipboard:`, error);
    }
  }

  return { copyToClipboard };
}