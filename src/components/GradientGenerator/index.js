import {Component} from 'react'

import {
  MainContainer,
  Heading,
  GradientDirection,
  GradientDirectionItemList,
  PickColors,
  Label,
  Input,
  InputContainer,
  InputHolder,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    input1: '#8ae323',
    input2: '#014f7b',
    activeTab: gradientDirectionsList[0].value,
    bg1: '#8ae323',
    bg2: '#014f7b',
  }

  onChangeInput1 = e => {
    this.setState({input1: e.target.value})
  }

  onChangeInput2 = e => {
    this.setState({input2: e.target.value})
  }

  onButtonClick = e => {
    this.setState({activeTab: e})
  }

  generateGradientColors = () => {
    const {input1, input2} = this.state
    this.setState({bg1: input1, bg2: input2})
  }

  render() {
    const {input1, input2, bg1, bg2, activeTab} = this.state
    return (
      <MainContainer
        data-testid="gradientGenerator"
        gradientColor={`to ${activeTab}, ${bg1}, ${bg2}`}
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <GradientDirection>Choose Direction</GradientDirection>
        <GradientDirectionItemList>
          {gradientDirectionsList.map(item => (
            <GradientDirectionItem
              key={item.directionId}
              gradientItem={item}
              activeTab={activeTab}
              onClick={this.onButtonClick}
            />
          ))}
        </GradientDirectionItemList>
        <PickColors>Pick the Colors</PickColors>
        <InputContainer>
          <InputHolder>
            <Label htmlFor="inp1">{input1}</Label>
            <Input
              id="inp1"
              type="color"
              value={input1}
              onChange={this.onChangeInput1}
            />
          </InputHolder>
          <InputHolder>
            <Label htmlFor="inp2">{input2}</Label>
            <Input
              id="inp2"
              type="color"
              value={input2}
              onChange={this.onChangeInput2}
            />
          </InputHolder>
        </InputContainer>
        <GenerateButton type="button" onClick={this.generateGradientColors}>
          Generate
        </GenerateButton>
      </MainContainer>
    )
  }
}

export default GradientGenerator
