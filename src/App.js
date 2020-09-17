import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import ContainingBlock from './containing'
import Specificity from './specificity'
import GridLayout from './gridLayout'
import Shorthand from './shorthand'
import Flexible from './flexible'
import Language from './language'
import Animation from './animation'
import Value from './value'
import Media from './media'
import Cascade from './cascade'
import 'antd/dist/antd.css'
import './App.scss'

const { Content, Footer, Sider } = Layout

function App () {
  const cssList = [{
    name: '语法',
    component: <Language />,
    key: '1'
  }, {
    name: '特殊性',
    component: <Specificity />,
    key: '2'
  },
  {
    name: '层叠',
    component: <Cascade />,
    key: '3'
  },
  {
    name: '包含块',
    component: <ContainingBlock />,
    key: '4'
  },
  {
    name: '值计算',
    component: <Value />,
    key: '5'
  },
  {
    name: '简写属性',
    component: <Shorthand />,
    key: '6'
  },
  {
    name: '弹性盒子',
    component: <Flexible />,
    key: '7'
  },
  {
    name: '网格布局',
    component: <GridLayout />,
    key: '8'
  },
  {
    name: '媒体查询',
    component: <Media />,
    key: '9'
  },
  {
    name: '动画',
    component: <Animation />,
    key: '10'
  }]
  const [currentComponent, setCurrentComponent] = useState(<Language />)
  const [list, setList] = useState(cssList)
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className='logo' />
        <Menu theme='dark' defaultSelectedKeys={['1']} mode='inline'>
          {
            list.map(item =>
              <Menu.Item key={item.key} onClick={() => setCurrentComponent(item.component)}>
                <span>{item.name}</span>
              </Menu.Item>)
          }
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Content style={{ margin: '0 16px' }}>
          {currentComponent}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App
