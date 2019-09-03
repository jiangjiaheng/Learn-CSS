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
import grid from '@/pages/flexbox/grid'
import holyGrail from '@/pages/flexbox/holyGrail'
import input from '@/pages/flexbox/input'
import pend from '@/pages/flexbox/pend'
import fixedEnd from '@/pages/flexbox/fixedEnd'
import waterFlow from '@/pages/flexbox/waterFlow'
import transition from '@/pages/transition/transition'
import animation from '@/pages/transition/animation'
import transform from '@/pages/transform/transform'
import threeD from '@/pages/transform/threeD'
import width from '@/pages/dimension/width'
import padding from '@/pages/dimension/padding'
import margin from '@/pages/dimension/margin'

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
    Dimension: {
        title: '尺寸边距篇',
        name: ' Dimension',
        subpages: {
            width: {
                title: '尺寸',
                name: 'width',
                component: width
            },
            padding: {
                title: '内边距',
                name: 'padding',
                component: padding
            },
            margin: {
                title: '外边距',
                name: 'margin',
                component: margin
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
            },
            grid: {
                title: '网格的布局',
                name: 'grid',
                component: grid
            },
            holyGrail: {
                title: '圣杯的布局',
                name: 'holyGrail',
                component: holyGrail
            },
            input: {
                title: '输入框的布局',
                name: 'input',
                component: input
            },
            pend: {
                title: '悬挂式布局',
                name: 'pend',
                component: pend
            },
            fixedEnd: {
                title: '固定的底部',
                name: 'fixedEnd',
                component: fixedEnd
            },
            waterFlow: {
                title: '流式布局',
                name: 'waterFlow',
                component: waterFlow
            }
        }
    },
    transitionAnimation: {
        title: '过渡动画篇',
        name: 'transitionAnimation',
        subpages: {
            transition: {
                title: '过渡',
                name: 'transition',
                component: transition
            },
            animation: {
                title: '动画',
                name: 'animation',
                component: animation
            }
        }
    },
    transformThreeD: {
        title: '变换3D篇',
        name: 'transformThreeD',
        subpages: {
            transform: {
                title: '变换',
                name: 'transform',
                component: transform
            },
            threeD: {
                title: '3D',
                name: 'threeD',
                component: threeD
            }
        }
    }
};

export default pageList;