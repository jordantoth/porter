import React, {useState} from 'react';
import ListItem from './components/ListItem';

function PackingList() {
    const [itemList, setItemList] = useState([
        {
            id: 'myId',
            myText: 'First one in the list',
            isChecked: false,
        },
        {
            id: 'myId2',
            myText: 'Second one in the list',
            isChecked: true,
        },
    ]);
    return (
        <div>
            {itemList.map((item) => <ListItem {...item}></ListItem>)}
            {/* <ListItem
                id='myId'
                myText='First one in the packing list'
                isChecked={false}
            ></ListItem>
            <ListItem
                id='myId2'
                myText='Second one in the packing list'
                isChecked={true}
            ></ListItem> */}
        </div>
    )
}

export default PackingList