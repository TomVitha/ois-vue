// * Clipboard related functions

export function useClipboard() {
  async function copyToClipboard(textToCopy: string | number): Promise<boolean> {
    try {
      await navigator.clipboard.writeText(textToCopy.toString());
      console.debug(`Copied to clipboard using Clipboard API:`, textToCopy);
      return true;
    } catch (error) {
      console.error(`Failed to copy to clipboard:`, error);
      return false;
    }
  }

  return { copyToClipboard };
}