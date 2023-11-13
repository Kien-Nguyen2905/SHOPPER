import React, { createContext, useContext, useState } from "react";

const TabContext = createContext({});

const Tab = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onChangeTab = (index) => setActiveIndex(index);

  return (
    <TabContext.Provider
      value={{
        activeIndex,
        onChangeTab,
      }}
    >
      <div className="product-details-tab">{children}</div>
    </TabContext.Provider>
  );
};

const TabHeader = ({ children }) => {
  const { activeIndex, onChangeTab } = useContext(TabContext);

  return (
    <ul className="nav nav-pills justify-content-center">
      {React.Children.map(children, (child, index) => {
        if (child && child.type.name === "TabHeaderItem") {
          return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: () => {
              onChangeTab(index);
            },
          });
        }
        return null;
      })}
    </ul>
  );
};

const TabHeaderItem = ({ isActive, onClick, children }) => {
  return (
    <li onClick={onClick} className="nav-item">
      <a
        className={`nav-link ${isActive ? "active" : ""}`}
        role="tab"
        aria-selected={isActive}
      >
        {children}
      </a>
    </li>
  );
};

const TabContent = ({ children }) => {
  const { activeIndex } = useContext(TabContext);

  return (
    <div className="tab-content">
      {React.Children.map(children, (child, index) => {
        if (child && child.type.name === "TabContentItem") {
          return React.cloneElement(child, {
            isActive: activeIndex === index,
          });
        }
        return null;
      })}
    </div>
  );
};

const TabContentItem = ({ isActive, children }) => {
  return (
    <div
      className={`tab-pane fade show ${isActive ? "active" : ""}`}
      role="tabpanel"
    >
      {children}
    </div>
  );
};

Tab.Header = TabHeader;
Tab.HeaderItem = TabHeaderItem;
Tab.Content = TabContent;
Tab.ContentItem = TabContentItem;

export default Tab;
