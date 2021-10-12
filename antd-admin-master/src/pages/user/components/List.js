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

    const columns = [
      {
        title: <Trans>Rank</Trans>,
        dataIndex: 'rank',
        key: 'rank',
        width: '5%'
      },
      {
        title: <Trans>Avatar</Trans>,
        dataIndex: 'avatar',
        key: 'avatar',
        width: '7%',
        fixed: 'left',
        render: text => <Avatar style={{ marginLeft: 8 }} src={text} />,
      },
      {
        title: <Trans>Name</Trans>,
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => <Link to={`user/${record.id}`}>{text}</Link>,
        width: '11%',
      },
      {
        title: <Trans>Alias</Trans>,
        dataIndex: 'alias',
        key: 'alias',
        width: '7%',
      },
      {
        title: <Trans>Core Center</Trans>,
        dataIndex: 'corecenter',
        key: 'corecenter',
        width: '10%',
      },
      // {
      //   title: <Trans>Age</Trans>,
      //   dataIndex: 'age',
      //   width: '6%',
      //   key: 'age',
      // },
      // {
      //   title: <Trans>Gender</Trans>,
      //   dataIndex: 'isMale',
      //   key: 'isMale',
      //   width: '7%',
      //   render: text => <span>{text ? 'Male' : 'Female'}</span>,
      // },
      {
        title: <Trans>Phone</Trans>,
        dataIndex: 'phone',
        key: 'phone',
        width: '9%',
      },
      {
        title: <Trans>Email</Trans>,
        dataIndex: 'email',
        key: 'email',
        width: '15%',
      },
      // {
      //   title: <Trans>Address</Trans>,
      //   dataIndex: 'address',
      //   key: 'address',
      // },
      // {
      //   title: <Trans>CreateTime</Trans>,
      //   dataIndex: 'createTime',
      //   key: 'createTime',
      // },
      // {
      //   title: <Trans>Operation</Trans>,
      //   key: 'operation',
      //   fixed: 'right',
      //   width: '8%',
      //   render: (text, record) => {
      //     return (
      //       <DropOption
      //         onMenuClick={e => this.handleMenuClick(record, e)}
      //         menuOptions={[
      //           { key: '1', name: t`Update` },
      //           { key: '2', name: t`Delete` },
      //         ]}
      //       />
      //     )
      //   },
      // },
      {
        title: <Trans>Work</Trans>,
        dataIndex: 'work',
        key: 'work',
      },
      {
        title: <Trans>Commute</Trans>,
        dataIndex: 'commute',
        key: 'commute',
      },
      {
        title: <Trans>Trip</Trans>,
        dataIndex: 'trip',
        key: 'trip',
      },
      {
        title: <Trans>Summary</Trans>,
        dataIndex: 'summary',
        key: 'summary',
      },
    ]

    return (
      <Table
        {...tableProps}
        pagination={{
          ...tableProps.pagination,
          showTotal: total => t`Total ${total} Items`,
        }}
        className={styles.table}
        bordered
        scroll={{ x: 1200 }}
        columns={columns}
        simple
        rowKey={record => record.id}
      />
    )
  }
}

List.propTypes = {
  onDeleteItem: PropTypes.func,
  onEditItem: PropTypes.func,
  location: PropTypes.object,
}

export default List
