// page list config
import Element from '@/pages/selector/element'

const pageList = {
    selector: {
        title: '选择器篇',
        name: 'selector',
        subpages: {
            element: {
                title: '元素选择器',
                name: 'element',
                component: Element
            }
        }
    }
};

export default pageList;