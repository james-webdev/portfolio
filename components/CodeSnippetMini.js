const CodeSnippetMini = () => {
  return (
    <div className="bg-gray-950 rounded-lg p-4 h-full flex items-center">
      <pre className="text-xs sm:text-sm leading-relaxed">
        <code>
          <span style={{ color: "#c586c0" }}>import</span>
          <span style={{ color: "#d4d4d4" }}>{" { "}</span>
          <span style={{ color: "#9cdcfe" }}>Box</span>
          <span style={{ color: "#d4d4d4" }}>{" } "}</span>
          <span style={{ color: "#c586c0" }}>from</span>
          {"\n"}
          <span style={{ color: "#ce9178" }}>{' "react-tailwind-converter"'}</span>
          {"\n\n"}
          <span style={{ color: "#808080" }}>{"<"}</span>
          <span style={{ color: "#4ec9b0" }}>Box</span>
          <span style={{ color: "#9cdcfe" }}>{" mt"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{"\"16\""}</span>
          <span style={{ color: "#9cdcfe" }}>{" bgc"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{"\"warning-500\""}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"  ml"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#d4d4d4" }}>{"{{ "}</span>
          <span style={{ color: "#9cdcfe" }}>xs</span>
          <span style={{ color: "#d4d4d4" }}>{": "}</span>
          <span style={{ color: "#ce9178" }}>{"\"80\""}</span>
          <span style={{ color: "#d4d4d4" }}>{", "}</span>
          <span style={{ color: "#9cdcfe" }}>lg</span>
          <span style={{ color: "#d4d4d4" }}>{": "}</span>
          <span style={{ color: "#ce9178" }}>{"\"32\""}</span>
          <span style={{ color: "#d4d4d4" }}>{" }}"}</span>
          {"\n"}
          <span style={{ color: "#808080" }}>{"/>"}</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippetMini;
