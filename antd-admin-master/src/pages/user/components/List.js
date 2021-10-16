import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Table, Modal, Avatar } from 'antd'
import { DropOption } from 'components'
import { t } from "@lingui/macro"
import { Trans } from "@lingui/macro"
import { Link } from 'umi'
import styles from './List.less'

const { confirm } = Modal


class List extends PureComponent {
  handleMenuClick = (record, e) => {
    const { onDeleteItem, onEditItem } = this.props

    if (e.key === '1') {
      onEditItem(record)
    } else if (e.key === '2') {
      confirm({
        title: t`Are you sure delete this record?`,
        onOk() {
          onDeleteItem(record.id)
        },
      })
    }
  }

  render() {
    const { onDeleteItem, onEditItem, ...tableProps } = this.props
    // const new_columns = [
    //   {
    //     title: 'Rank',
    //     dataIndex: 'rank',
    //     key: 'rank',
    //     render: text => <a>{text}</a>,
    //     width: 80,
    //   },
    //   {
    //     title: 'Name',
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: text => <a>{text}</a>,
    //     width: 150,
    //   },
    //   {
    //     title: 'Alias',
    //     dataIndex: 'alias',
    //     key: 'alias',
    //     width: 100,
    //   },
    //   {
    //     title: 'Core Center',
    //     dataIndex: 'corecenter',
    //     key: 'corecenter',
    //     width: 150,
    //   },

    //   {
    //     title: 'Phone',
    //     dataIndex: 'phone',
    //     key: 'phone',
    //     width: 120,
    //   },
    //   {
    //     title: 'Email',
    //     dataIndex: 'email',
    //     key: 'email',
    //     width: 150,
    //   },

    //   {
    //     title: 'Commute',
    //     dataIndex: 'commute',
    //     key: 'commute',
    //     width: 120,
    //   },
    //   {
    //     title: 'Work',
    //     dataIndex: 'work',
    //     key: 'work',
    //     width: 120,
    //   },
    //   {
    //     title: 'Trip',
    //     dataIndex: 'trip',
    //     key: 'trip',
    //     width: 150,
    //   },
    //   {
    //     title: 'Summary',
    //     dataIndex: 'summary',
    //     key: 'summary',
    //     width: 120,
    //   },
    // ];
    // const columns = [
    //   {
    //     title: <Trans>Rank</Trans>,
    //     dataIndex: 'rank',
    //     key: 'rank',
    //     width: '5%'
    //   },
    //   {
    //     title: <Trans>Avatar</Trans>,
    //     dataIndex: 'avatar',
    //     key: 'avatar',
    //     width: '7%',
    //     fixed: 'left',
    //     render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
    //   },
    //   {
    //     title: <Trans>Name</Trans>,
    //     dataIndex: 'name',
    //     key: 'name',
    //     render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
    //     width: '11%',
    //   },
    //   {
    //     title: <Trans>Alias</Trans>,
    //     dataIndex: 'alias',
    //     key: 'alias',
    //     width: '7%',
    //   },
    //   {
    //     title: <Trans>Core Center</Trans>,
    //     dataIndex: 'corecenter',
    //     key: 'corecenter',
    //     width: '10%',
    //   },
      
    //   {
    //     title: <Trans>Phone</Trans>,
    //     dataIndex: 'phone',
    //     key: 'phone',
    //     width: '9%',
    //   },
    //   {
    //     title: <Trans>Email</Trans>,
    //     dataIndex: 'email',
    //     key: 'email',
    //     width: '15%',
    //   },

     
    //   {
    //     title: <Trans>Work</Trans>,
    //     dataIndex: 'work',
    //     key: 'work',
    //   },
    //   {
    //     title: <Trans>Commute</Trans>,
    //     dataIndex: 'commute',
    //     key: 'commute',
    //   },
    //   {
    //     title: <Trans>Trip</Trans>,
    //     dataIndex: 'trip',
    //     key: 'trip',
    //   },
    //   {
    //     title: <Trans>Summary</Trans>,
    //     dataIndex: 'summary',
    //     key: 'summary',
    //   },
    // ]
    // const data = [
    //   {
    //     key: '1',
    //     rank:'1',
    //     name: 'John Brown',
    //     alias: 'John',
    //     corecenter:'app center',
    //     phone: '1549742584',
    //     email: 'dweff@microsoft.com',
    //     commute: '122',
    //     work: '42',
    //     trip: '0',
    //     summary:'164',

    //   },
    //   {
    //     key: '2',
    //     rank:'2',
    //     name: 'Billy Brown',
    //     alias: 'Billy',
    //     corecenter:'app center',
    //     phone: '1542312334',
    //     email: 'wffaeff@microsoft.com',
    //     commute: '232',
    //     work: '11',
    //     trip: '0',
    //     summary:'243',


    //   },
    //   {
    //     key: '3',
    //     rank:'3',
    //     name: 'Will Xinda',
    //     alias: 'Will',
    //     corecenter:'app center',
    //     phone: '1321122335',
    //     email: 'csawwwd@microsoft.com',
    //     commute: '309',
    //     work: '33',
    //     trip: '6',
    //     summary:'332',

    //   },
    //   {
    //     key: '4',
    //     rank:'4',
    //     name: 'Tom Willson',
    //     alias: 'Tom',
    //     corecenter:'app center',
    //     phone: '1564442311',
    //     email: 'uottfs@microsoft.com',
    //     commute: '323',
    //     work: '85',
    //     trip: '0',
    //     summary:'418',
    //   },
    //   {
    //     key: '5',
    //     rank:'5',
    //     name: 'Dicky Zhao',
    //     alias: 'Dicky',
    //     corecenter:'app center',
    //     phone: '1321122335',
    //     email: 'csawwwd@microsoft.com',
    //     commute: '429',
    //     work: '47',
    //     trip: '0',
    //     summary:'476',
    //   },
    //   {
    //     key: '6',
    //     rank:'6',
    //     name: 'Franklin Li',
    //     alias: 'Franklin',
    //     corecenter:'app center',
    //     phone: '1321122335',
    //     email: 'frankli@microsoft.com',
    //     commute: '529',
    //     work: '47',
    //     trip: '0',
    //     summary:'654',
    //   },
    //   {
    //     key: '7',
    //     rank:'7',
    //     name: 'Martin Xie',
    //     alias: 'Martin',
    //     corecenter:'app center',
    //     phone: '154287552',
    //     email: 'martindws@microsoft.com',
    //     commute: '714',
    //     work: '47',
    //     trip: '0',
    //     summary:'761',
    //   },
    //   {
    //     key: '8',
    //     rank:'8',
    //     name: 'Jimmy Yu',
    //     alias: 'Jimmy',
    //     corecenter:'app center',
    //     phone: '173213352',
    //     email: 'jimmydwa@microsoft.com',
    //     commute: '529',
    //     work: '11',
    //     trip: '332',
    //     summary:'872',
    //   },
    // ];
    

    const columns = [
      {
        title: t`Date`,
        dataIndex: 'date',
        key: 'date',

      },
      {
        title: t`Printer`,
        dataIndex: 'printer',
        key: 'printer',

      },
      {
        title: t`Elevator`,
        dataIndex: 'elevator',
        key: 'elevator',

      },
      {
        title: t`Transport`,
        dataIndex: 'transport',
        key: 'transport',

      },
      {
        title: t`Start Point`,
        dataIndex: 'startpoint',
        key: 'startpoint',

      },
      {
        title: t`End Point`,
        dataIndex: 'endpoint',
        key: 'endpoint',

      },

      {
        title: t`OffLine Meeting`,
        dataIndex: 'meeting',
        key: 'meeting',

      },
      {
        title: t`Commute`,
        dataIndex: 'route',
        key: 'route',
      },
      {
        title: t`Amounts`,
        dataIndex: 'amounts',
        key: 'amounts',
      },
      
    ]

    const data = [
      {
        key: '1',
        date:'9/16/2021',
        printer: '3',
        elevator: '4',
        transport:'High-speed rail',
        startpoint: 'Shanghai',
        endpoint: 'Suzhou',
        meeting: '3',
        route: 'RT1',
        amounts:'364',

      },
      {
        key: '2',
        date:'9/17/2021',
        printer: '0',
        elevator: '2',
        transport:'High-speed rail',
        startpoint: 'Shanghai',
        endpoint: 'Wuxi',
        meeting: '0',
        route: 'N/A',
        amounts:'322',

      },
      {
        key: '3',
        date:'9/18/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '3',
        route: 'N/A',
        amounts:'24',

      },
      {
        key: '4',
        date:'9/19/2021',
        printer: '3',
        elevator: '4',
        transport:'High-speed rail',
        startpoint: 'Shanghai',
        endpoint: 'Suzhou',
        meeting: '5',
        route: 'RT7',
        amounts:'287',

      },
      {
        key: '5',
        date:'9/20/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '4',
        route: 'RT1',
        amounts:'74',

      },
      {
        key: '6',
        date:'9/21/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '1',
        route: 'RT1',
        amounts:'26',

      },
      {
        key: '7',
        date:'9/22/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '6',
        route: 'RT1',
        amounts:'46',

      },
      {
        key: '8',
        date:'9/23/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '7',
        route: 'RT1',
        amounts:'85',

      },
      {
        key: '9',
        date:'9/24/2021',
        printer: '3',
        elevator: '4',
        transport:'N/A',
        startpoint: 'N/A',
        endpoint: 'N/A',
        meeting: '0',
        route: 'RT1',
        amounts:'84',

      },
      {
        key: '10',
        date:'9/25/2021',
        printer: '3',
        elevator: '4',
        transport:'Subway',
        startpoint: 'ZiZhu',
        endpoint: 'Shanghai Railway Station',
        meeting: '0',
        route: 'N/A',
        amounts:'364',

      },
      {
        key: '11',
        date:'9/26/2021',
        printer: '3',
        elevator: '4',
        transport:'High-speed rail',
        startpoint: 'Shanghai',
        endpoint: 'Suzhou',
        meeting: '3',
        route: 'RT1',
        amounts:'147',

      },
    ];



    return (
      <Table columns={columns} dataSource={data} />
      // <Table
      //   {...tableProps}
      //   pagination={{
      //     ...tableProps.pagination,
      //     showTotal: total => t`Total ${total} Items`,
      //   }}
      //   className={styles.table}
      //   bordered
      //   scroll={{ x: 1200 }}
      //   columns={columns}
      //   simple
      //   rowKey={record => record.id}
      // />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List

