import MainLayout from 'src/layouts/mainLayout';
import { useState } from 'react';
import ApodCell from 'src/components/ApodCell';

const PictureOfTheDayPage = () => {
  const [apod, setApod] = useState();

  return (
    <MainLayout>
      <ApodCell />
    </MainLayout>
  );
};

export default PictureOfTheDayPage;
