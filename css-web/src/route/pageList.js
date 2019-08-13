// page list config
import element from '@/pages/selector/element'
import relation from '@/pages/selector/relation'
import attribute from '@/pages/selector/attribute'
import pseudoClasses from '@/pages/selector/pseudoClasses'
import pseudoElement from '@/pages/selector/pseudoElement'
import position from '@/pages/layout/position'
import layout from '@/pages/layout/layout'
import flexContainer from '@/pages/flexbox/flexContainer'
import flexItem from '@/pages/flexbox/flexItem'
import diceLayout from '@/pages/flexbox/diceLayout'

const pageList = {
    selector: {
        title: '选择器篇',
        name: 'selector',
        subpages: {
            element: {
                title: '元素选择器',
                name: 'element',
                component: element
            },
            relation: {
                title: '关系选择器',
                name: 'relation',
                component: relation
            },
            attribute: {
                title: '属性选择器',
                name: 'attribute',
                component: attribute
            },
            pseudoClasses: {
                title: '伪类选择器',
                name: 'pseudoClasses',
                component: pseudoClasses
            },
            pseudoElement: {
                title: '伪对象选择器',
                name: 'pseudoElement',
                component: pseudoElement
            }
        }
    },
    layout: {
        title: '定位布局篇',
        name: 'layout',
        subpages: {
            position: {
                title: '定位',
                name: 'position',
                component: position
            },
            layout: {
                title: '布局',
                name: 'layout',
                component: layout
            }
        }
    },
    flexbox: {
        title: '弹性盒子篇',
        name: 'flexbox',
        subpages: {
            flexContainer: {
                title: '盒子容器',
                name: 'flexContainer',
                component: flexContainer
            },
            flexItem: {
                title: '盒子项目',
                name: 'flexItem',
                component: flexItem
            },
            diceLayout: {
                title: '骰子的布局',
                name: 'diceLayout',
                component: diceLayout
            }
        }
    },
};

export default pageList;