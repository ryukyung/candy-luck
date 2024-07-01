const copyUrl = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default copyUrl;
