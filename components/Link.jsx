import Link from 'next/link'
import styled from "styled-components"

const MyLink = styled(Link)`
  &[style] {
    color: #2B2A33;
    font-size: 1.25em;
    cursor: pointer;
  }
`

export default function MyLink (
  text,
  href,
  ...props
) {
  return (
    <Link href={href}>
      <a>{text}</a>
    </Link>
  )
}