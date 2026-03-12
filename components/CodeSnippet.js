const CodeSnippet = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-gray-900 px-4 py-3 flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <span className="ml-3 text-gray-400 text-sm">App.tsx</span>
      </div>
      <pre className="bg-gray-950 p-6 overflow-x-auto text-sm sm:text-base leading-relaxed">
        <code>
          <span style={{ color: "#c586c0" }}>import</span>
          <span style={{ color: "#d4d4d4" }}>{" { "}</span>
          <span style={{ color: "#9cdcfe" }}>Box</span>
          <span style={{ color: "#d4d4d4" }}>{" } "}</span>
          <span style={{ color: "#c586c0" }}>from</span>
          <span style={{ color: "#ce9178" }}>{' "react-tailwind-converter"'}</span>
          <span style={{ color: "#d4d4d4" }}>;</span>
          {"\n\n"}
          <span style={{ color: "#c586c0" }}>function</span>
          <span style={{ color: "#dcdcaa" }}>{" App"}</span>
          <span style={{ color: "#d4d4d4" }}>() {"{"}</span>
          {"\n"}
          <span style={{ color: "#d4d4d4" }}>{"  "}</span>
          <span style={{ color: "#c586c0" }}>return</span>
          <span style={{ color: "#d4d4d4" }}> (</span>
          {"\n"}
          <span style={{ color: "#d4d4d4" }}>{"    "}</span>
          <span style={{ color: "#808080" }}>{"<"}</span>
          <span style={{ color: "#4ec9b0" }}>Box</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      mt"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"16"'}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      padding"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"20"'}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      ml"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#d4d4d4" }}>{"{{ "}</span>
          <span style={{ color: "#9cdcfe" }}>xs</span>
          <span style={{ color: "#d4d4d4" }}>: </span>
          <span style={{ color: "#ce9178" }}>{'"80"'}</span>
          <span style={{ color: "#d4d4d4" }}>, </span>
          <span style={{ color: "#9cdcfe" }}>lg</span>
          <span style={{ color: "#d4d4d4" }}>: </span>
          <span style={{ color: "#ce9178" }}>{'"32"'}</span>
          <span style={{ color: "#d4d4d4" }}>{" }}"}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      borderRadius"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"3xl"'}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      bgc"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"warning-500"'}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      borderColor"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"danger-400"'}</span>
          {"\n"}
          <span style={{ color: "#9cdcfe" }}>{"      textColor"}</span>
          <span style={{ color: "#d4d4d4" }}>=</span>
          <span style={{ color: "#ce9178" }}>{'"black"'}</span>
          {"\n"}
          <span style={{ color: "#808080" }}>{"    >"}</span>
          {"\n"}
          <span style={{ color: "#d4d4d4" }}>{"      Testing Box"}</span>
          {"\n"}
          <span style={{ color: "#808080" }}>{"    </"}</span>
          <span style={{ color: "#4ec9b0" }}>Box</span>
          <span style={{ color: "#808080" }}>{">"}</span>
          {"\n"}
          <span style={{ color: "#d4d4d4" }}>{"  );"}</span>
          {"\n"}
          <span style={{ color: "#d4d4d4" }}>{"}"}</span>
        </code>
      </pre>
    </div>
  );
};

export default CodeSnippet;
