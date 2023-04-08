import {ListItem, ButtonItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientItem, activeTab, onClick} = props
  const {value, displayText} = gradientItem
  const buttonClicked = () => {
    onClick(value)
  }

  const isTrue = activeTab === value

  return (
    <ListItem>
      <ButtonItem
        as="button"
        type="button"
        onClick={buttonClicked}
        isTrue={isTrue}
      >
        {displayText}
      </ButtonItem>
    </ListItem>
  )
}

export default GradientDirectionItem
