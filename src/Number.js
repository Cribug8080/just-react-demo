import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

function Number(props, ref) {
  const { value: propsValue, onChange } = props;
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  useImperativeHandle(
    // 拿组件的值
    ref,
    () => {
      return {
        value
      };
    },
    [value]
  );

  const handleChange = (e) => {
    const val = e.target.value;
    setValue(val);
    onChange && onChange(val);
  };

  return (
    <input value={propsValue ?? value} type="number" onChange={handleChange} />
  );
}

export default forwardRef(Number);
