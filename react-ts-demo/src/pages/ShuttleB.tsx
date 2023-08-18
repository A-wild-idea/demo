import React, { useState } from 'react';
import { Transfer } from 'antd';
import type { TransferDirection } from 'antd/es/transfer';
// 定义mock数据的格式
interface RecordType {
    key: string;
    title: string;
    description: string;
}
//   mock的数据
const mockData: RecordType[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    title: `content${i + 1}`,
    description: `description of content${i + 1}`,
}));
//   接口键值断言number
const initialTargetKeys = mockData.filter((item) => Number(item.key) > 10).map((item) => item.key);

const ShuttleB: React.FC = () => {
    // 目标的计算属性
    const [targetKeys, setTargetKeys] = useState(initialTargetKeys);
    //当前选择的数据进行保存， 断言为string类型
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    //   点击的change事件
    const onChange = (nextTargetKeys: string[], direction: TransferDirection, moveKeys: string[]) => {
        console.log('targetKeys:', nextTargetKeys);
        //   console.log('direction:', direction);
        //   console.log('moveKeys:', moveKeys);
        setTargetKeys(nextTargetKeys);
    };
    //   将当前选择的数据保存
    const onSelectChange = (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => {
        // console.log('sourceSelectedKeys:', sourceSelectedKeys);
        // console.log('targetSelectedKeys:', targetSelectedKeys);
        setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
    };
// 监听滚动事件，暂时没用
    const onScroll = (direction: TransferDirection, e: React.SyntheticEvent<HTMLUListElement>) => {
        //   console.log('direction:', direction);
        //   console.log('target:', e.target);
    };
    return (
        <div>
            <Transfer
                // 数据来源
                dataSource={mockData}
                //   表头标题
                titles={['来的地方', '去的地方']}
                //   目标key的值
                targetKeys={targetKeys}
                //   选择的key值
                selectedKeys={selectedKeys}
                onChange={onChange}
                onSelectChange={onSelectChange}
                onScroll={onScroll}
                render={(item) => item.title}
            />
        </div>
    )
}

export default ShuttleB