import React from 'react'
import { Radio } from 'antd'
import { Page } from 'components'
import HighChartsComponent from './HighChartsComponent'
import styles from './index.less'

const RadioGroup = Radio.Group

const chartList = [
  {
    label: 'Highstock',
    value: 'Highstock',
  },
  {
    label: 'Highmaps',
    value: 'Highmaps',
  },
  {
    label: 'HighMore',
    value: 'HighMore',
  },
]

class Chart extends React.Component {
  constructor() {
    super()
    this.state = {
      type: 'Highstock',
    }
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)
  }
  handleRadioGroupChange(e) {
    this.setState({
      type: e.target.value,
    })
  }
  render() {
    return (
      <Page inner>
         {/* <RadioGroup
          options={chartList}
          defaultValue="Highstock"
          onChange={this.handleRadioGroupChange}
        /> */}
        <div className={styles.chart}>
          <HighChartsComponent type={this.state.type} />
        </div>
         {/* <RadioGroup
          options={chartList}
          defaultValue="Highstock"
          onChange={this.handleRadioGroupChange}
        />
         <RadioGroup
          options={chartList}
          defaultValue="Highmaps"
          onChange={this.handleRadioGroupChange}
        /> */}

        <div>
          <div className={styles.left}><img src="https://picserver.blob.core.windows.net/picture/1629277039571894.gif"  /></div>
          <div className={styles.right}><img  src="https://picserver.blob.core.windows.net/picture/Snipaste_2021-10-16_12-52-46.png"  width="500px" /></div>
        </div>
      </Page>
    )
  }
}

export default Chart
