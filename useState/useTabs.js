import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the section 1"
  },
  {
    tab: "Section 2",
    content: "I'm the content of the section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab); // 최상위에 위치 해야 됨
    if (!allTabs || !Array.isArray(allTabs)) {
        // allTabs로 전달받은 것이 없거나 allTabs가 array가 아니면 종료(return)
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div className="App">
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
