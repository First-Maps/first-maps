import styled from "styled-components"
import PropTypes from "prop-types"

const Paragraph = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  max-width: 800px;
  margin-top: 34px;
  
`

export default function BodyText({
  label
}){
  return(
    <Paragraph>{label}</Paragraph>
  )
}

Paragraph.propTypes = {
    label: PropTypes.string,
}

Paragraph.defaultProps = {
    label: "Abenaki (Eastern: Alənαpαtəwéwαkan, Western: Alnôbaôdwawôgan) is an endangered Algonquian language of Quebec and the northern states of New England. The language has Eastern and Western forms which differ in vocabulary and phonology and are sometimes considered distinct languages."
}