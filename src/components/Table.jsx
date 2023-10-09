import { Table, Button, Radio } from "antd";
import { data } from '../data'
import { useState } from "react";



const _Table = () => {


    const [filteredInfo, setFilteredInfo] = useState([]);
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const colums = [
        {
            title: 'Number',
            dataIndex: 'number',
            key: 'number',
        },
        {
            title: 'Type',
            dataIndex: 'type',
            key: 'type',
            filters: [
                {
                    text: 'standard',
                    value: 'standard',
                },
                {
                    text: 'suite',
                    value: 'suite',
                },
                {
                    text: 'deluxe',
                    value: 'deluxe',
                },
            ],
            filteredValue: filteredInfo.type || null,
            onFilter: (value, record) => record.type.includes(value),
        },
        {
            title: 'Occupancy',
            dataIndex: 'occupancy',
            key: 'occupancy',
            filters: [
                {
                    text: '2',
                    value: '2',
                },
                {
                    text: '3',
                    value: '3',
                },
                {
                    text: '4',
                    value: '4',
                },
            ],
            filteredValue: filteredInfo.occupancy || null,
            onFilter: (value, record) => record.occupancy.includes(value),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            sorter: (a, b) => a.price - b.price,
            sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Guest',
            dataIndex: 'guest',
            key: 'guest',
            filters: [
                {}
            ]
        },
        {
            title: '',
            dataIndex: '',
            key: 'x',
            render: () => <Button>More information</Button>

        },
    ];

    const roomsDate = data.Rooms.map(item => ({ ...item, key: item.id }))

    return (
        <>
            <Button onClick={clearAll}> Clear all filters </Button>

            <Radio value='radio'> Free rooms only </Radio>

            <Table
                dataSource={roomsDate}
                columns={colums}
                onChange={handleChange}
                pagination = {{
                    position: 'bottomCenter',
                }}
            />
        </>
    )
};

export default _Table;