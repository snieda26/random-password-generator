export const copyToClipboard = (value: string) => {
  navigator.clipboard.writeText(value).then(
    function () {
      alert("Password copied to clipboard!");
    },
    function (err) {
      console.error("Could not copy text: ", err);
    }
  );
};
