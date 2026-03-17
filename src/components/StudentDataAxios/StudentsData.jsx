import React, { use } from "react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

const StudentsData = ({ dataPromise }) => {
  const responseData = use(dataPromise);
  const datapromise = responseData.data;
  console.log(datapromise);

  const marksData = datapromise.map((studentDataNested) => {
    console.log(studentDataNested);
    const student = {
      id: studentDataNested.id,
      name: studentDataNested.name,
      physics: studentDataNested.marks.physics,
      chemistry: studentDataNested.marks.chemistry,
      math: studentDataNested.marks.math,
    }

    const avg = (student.physics + student.chemistry + student.math) / 3;
    student.avg = avg;
    return student;
  });

  console.log(marksData);

  return (
    <BarChart width={500} height={600} data={marksData}>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis></YAxis>
        <Bar dataKey={'physics'} fill="green"></Bar>
        <Bar dataKey={'math'} fill="red"></Bar>



    </BarChart>

        )
};

export default StudentsData;
