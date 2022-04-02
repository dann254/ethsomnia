import ReactJson from 'react-json-view';

const JSONViewer: React.FC = () => {
  const mbo = {
    string: 'this is a test ...',
    integer: 42,
    array: [1, 3, NaN],
    float: 3.14159,
    undefined: undefined,
    nan: NaN,
    object: {
      'first-child': true,
      'second-child': false,
      'last-child': null,
    },
    string_number: '1234',
    date: new Date(),
  };
  return (
    <ReactJson
      src={mbo}
      name={false}
      style={{ lineHeight: '15px' }}
      enableClipboard={false}
      theme={{
        base00: 'transparent', // background
        base01: 'green',
        base02: 'transparent', // undefined&nanbackground
        base03: 'balc',
        base04: 'red', // object/array size
        base05: 'purple', // undefined
        base06: 'red',
        base07: '#27AE60', // keys and brackets
        base08: '#444', // NaN
        base09: '#F2C94C', // string values
        base0A: '#ddd', //Null
        base0B: 'pink', // float
        base0C: 'red', // number keys
        base0D: 'grey', // markers open
        base0E: '#EB5757', // markers closed & boolean
        base0F: '#2C7BE5', // number values
      }}
      iconStyle={'triangle'}
      indentWidth={2}
      displayDataTypes={false}
      displayObjectSize={false}
    />
  );
};

export default JSONViewer;
