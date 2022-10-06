import styled, { css } from "styled-components"
import SearchResult from "./search-result"

const Popover = css`
  max-height: 80vh;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  top: 100%;
  margin-top: 16px;
  width: 80vw;
  max-width: 30em;
  box-shadow: 0 0 5px 0;
  padding: 16px;
  border-radius: 2px;
  background: ${({ theme }) => theme.background};
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.foreground};
    font-size: 13px;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 8px;

      a {
        color: ${({ theme }) => theme.foreground};

        h4 {
          margin-bottom: 4px;
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`