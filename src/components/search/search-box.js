import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        className="SearchInput"
        type="text"
        placeholder="搜索本站"
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <svg className="SearchIcon"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
      >
        <path d="M19.025 20.05 13.25 14.3q-.75.625-1.725.975-.975.35-2 .35-2.575 0-4.35-1.775Q3.4 12.075 3.4 9.5q0-2.55 1.775-4.338 1.775-1.787 4.35-1.787 2.55 0 4.325 1.775 1.775 1.775 1.775 4.35 0 1.075-.35 2.05-.35.975-.95 1.7l5.775 5.775q.2.2.2.5t-.225.525q-.225.225-.537.225-.313 0-.513-.225Zm-9.5-5.925q1.925 0 3.263-1.35 1.337-1.35 1.337-3.275 0-1.925-1.337-3.275-1.338-1.35-3.263-1.35-1.95 0-3.287 1.35Q4.9 7.575 4.9 9.5q0 1.925 1.338 3.275 1.337 1.35 3.287 1.35Z" />
      </svg>
    </form>
  )
)