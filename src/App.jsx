import { MultiSelect, Modal } from '@carbon/react';
import React from 'react';

import { toppingData } from './topping-data';
import { applyToppings } from './topping-utils';
import Category from './Category';

export default function App() {

  const [selected, setSelected] = React.useState([])
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    applyToppings(selected)
      .then(res => console.log({ res }))
      .catch(err => setOpen(true))
  }, [selected])

  const allData = toppingData.filter(data => !data.disabled)

  const onChange = item => {

    const { selectedItems } = item
    const isSelectAll = selectedItems.some(item => item.id == 'downshift-0-item-all')

    if (isSelectAll && selectedItems.length > selected.length) {
      setSelected(allData)
    } else if (isSelectAll && selectedItems.length < selected.length) {
      const selectedData = selectedItems.filter(data => data.id != 'downshift-0-item-all')
      setSelected(selectedData)
    } else {
      const isSelectAllSelectedPreviously = selected.some(item => item.id == 'downshift-0-item-all')
      if (isSelectAllSelectedPreviously) {
        setSelected([])
      } else if (selectedItems.length == allData.length - 1) {
        setSelected(allData)
      } else {
        setSelected(selectedItems)
      }
    }
  }
  return (
    <div className='select-all'>

      <MultiSelect
        id="carbon-multiselect-example"
        items={toppingData}
        itemToString={(item) => (item ? item.text : '')}
        selectedItems={selected}
        onChange={onChange}
        selectionFeedback={'fixed'}
      />
      <div className='select-bottom'>Some Options may be unavailable</div>

      <Modal passiveModal open={open} onRequestClose={() => setOpen(false)}>
        <p>Apply toppings request failed. Please try the request again.</p>
      </Modal>

      <Category data={selected} />
    </div>
  );
}
