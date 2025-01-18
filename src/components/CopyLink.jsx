import copyIcon from "../assets/copy.svg";

export default function CopyLink({ link }) {
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(link);
            alert("Link copied to clipboard");
        } catch (error) {
            console.error("Failed to copy", error);
        }
    };

return (
    <img
    src={copyIcon}
    alt="Copy link icon"
    className="copy"
    onClick={handleCopy}
    style={{ cursor: "pointer" }}
    />
);
};