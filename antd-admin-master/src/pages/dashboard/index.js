import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Row, Col, Card, Radio } from 'antd'
import { Color } from 'utils'
import { Page, ScrollBar } from 'components'
import {
  NumberCard,
  Quote,
  Sales,
  Weather,
  RecentSales,
  Comments,
  Completed,
  Browser,
  Cpu,
  User,
  HighstockComponent
} from './components'
import styles from './index.less'
import store from 'store'
import HighChartsComponent from '../chart/highCharts/HighChartsComponent'

const RadioGroup = Radio.Group
const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

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


@connect(({ app, dashboard, loading }) => ({
  dashboard,
  loading,
}))
class Dashboard extends PureComponent {

  constructor() {
    super()
    this.state = {
      type: '',
    }
    this.handleRadioGroupChange = this.handleRadioGroupChange.bind(this)
  }
  handleRadioGroupChange(e) {
    this.setState({
      type: e.target.value,
    })
  }

  render() {
    const userDetail = store.get('user')
    const { avatar, username } = userDetail
    const { dashboard, loading } = this.props
    const {
      weather,
      sales,
      quote,
      numbers,
      recentSales,
      comments,
      completed,
      browser,
      cpu,
      user,
      highstockcomponent
    } = dashboard

    const numberCards = numbers.map((item, key) => (
      <Col key={key} lg={6} md={12}>
        <NumberCard {...item} />
      </Col>
    ))

    return (
      <Page
        // loading={loading.models.dashboard && sales.length === 0}
        className={styles.dashboard}
      >
        <Row gutter={24}>
          {numberCards}
          <Col lg={24} md={24}>
            {/*<Card*/}
            {/*  bordered={false}*/}
            {/*  bodyStyle={{*/}
            {/*    padding: '24px 36px 24px 0',*/}
            {/*  }}*/}
            {/*>*/}
            {/*  <Sales data={sales} />*/}
            {/*</Card>*/}
            <div className={styles.chart}>
              <HighChartsComponent type={this.state.type} />
            </div>
          </Col>
          {/*<Col lg={6} md={24}>*/}
          {/*  <Row gutter={24}>*/}
          {/*    <Col lg={24} md={12}>*/}
          {/*      <Card*/}
          {/*        bordered={false}*/}
          {/*        className={styles.weather}*/}
          {/*        bodyStyle={{*/}
          {/*          padding: 0,*/}
          {/*          height: 204,*/}
          {/*          background: Color.blue,*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <Weather*/}
          {/*          {...weather}*/}
          {/*          loading={loading.effects['dashboard/queryWeather']}*/}
          {/*        />*/}
          {/*      </Card>*/}
          {/*    </Col>*/}
          {/*    <Col lg={24} md={12}>*/}
          {/*      <Card*/}
          {/*        bordered={false}*/}
          {/*        className={styles.quote}*/}
          {/*        bodyStyle={{*/}
          {/*          padding: 0,*/}
          {/*          height: 204,*/}
          {/*          background: Color.peach,*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        <ScrollBar>*/}
          {/*          <Quote {...quote} />*/}
          {/*        </ScrollBar>*/}
          {/*      </Card>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*</Col>*/}
          {/*<Col lg={12} md={24}>*/}
          {/*  <Card bordered={false} {...bodyStyle}>*/}
          {/*    <RecentSales data={recentSales} />*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*<Col lg={12} md={24}>*/}
          {/*  <Card bordered={false} {...bodyStyle}>*/}
          {/*    <ScrollBar>*/}
          {/*      <Comments data={comments} />*/}
          {/*    </ScrollBar>*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*<Col lg={24} md={24}>*/}
          {/*  <Card*/}
          {/*    bordered={false}*/}
          {/*    bodyStyle={{*/}
          {/*      padding: '24px 36px 24px 0',*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    <Completed data={completed} />*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*<Col lg={8} md={24}>*/}
          {/*  <Card bordered={false} {...bodyStyle}>*/}
          {/*    <Browser data={browser} />*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*<Col lg={8} md={24}>*/}
          {/*  <Card bordered={false} {...bodyStyle}>*/}
          {/*    <ScrollBar>*/}
          {/*      <Cpu {...cpu} />*/}
          {/*    </ScrollBar>*/}
          {/*  </Card>*/}
          {/*</Col>*/}
          {/*<Col lg={8} md={24}>*/}
          {/*  <Card*/}
          {/*    bordered={false}*/}
          {/*    bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}*/}
          {/*  >*/}
          {/*    <User {...user} avatar={avatar} username={username} />*/}
          {/*  </Card>*/}
          {/*</Col>*/}



        </Row>
      </Page>
    )
  }
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default Dashboard
