function generateData(dummy_data,categories,graphData) {
    let i=0;let j=0;
    for(i=1;i<Object. keys(dummy_data).length;i++)
    {
      if(typeof dummy_data[i] === 'object')
      {
        let newArray= Object.keys(dummy_data[i]);
        for(j=0;j<newArray.length;j++)
        {
          console.log(dummy_data[i][newArray[j]])
           graphData.push(dummy_data[i][newArray[j]]);
           categories.push(newArray[j]);
        }
      }
      else{
        graphData.push(dummy_data[i]);
        categories.push("Question "+ i);
      }

    }
}

export default generateData;