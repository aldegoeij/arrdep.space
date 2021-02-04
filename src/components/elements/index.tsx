import React from "react"
import styled from "styled-components"

export const Markdown = styled.div`
  strong {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  p {
    font-size: ${({ theme }) => theme.fontSize["sm"]};
    color: ${({ theme }) => theme.colors.grey[600]};
    margin-bottom: 1rem;
  }
  h2 {
    font-size: ${({ theme }) => theme.fontSize["2xl"]};
    font-family: ${({ theme }) => theme.font.sans};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  }
  h3 {
    font-size: ${({ theme }) => theme.fontSize["xl"]};
    font-family: ${({ theme }) => theme.font.sans};
    margin-bottom: ${({ theme }) => theme.spacing[4]};
    color: ${({ theme }) => theme.colors.black};
    font-weight: ${({ theme }) => theme.fontWeight.extrabold};
  }
  ul {
    list-style-position: inside;
    li {
      padding-left: 1rem;
      font-size: ${({ theme }) => theme.fontSize["sm"]};
      color: ${({ theme }) => theme.colors.grey[600]};
      margin-bottom: 0.75rem;
      :before {
        content: "• ";
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  a {
    color: ${({ theme }) => theme.colors.blue};
  }
`
