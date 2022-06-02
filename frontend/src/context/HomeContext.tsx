import { useState, useEffect, createContext } from 'react';
import { GetAllCourseResponse, ResponseAxiosType } from '../Types';
import { axiosCourse } from '../utils/axios';
export const HomeContext = createContext<GetAllCourseResponse[]>([]);

export default function HomeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [courses, setCourses] = useState<GetAllCourseResponse[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const resp: ResponseAxiosType<GetAllCourseResponse[] & string> =
          await axiosCourse({
            method: 'get',
            url: '/',
          });

        if (resp.data.success) {
          setCourses(resp.data.message);
        } else {
          throw new Error(resp.data.message);
        }
      } catch (error) {
        console.log('file: HomeContext index.tsx >>> line 33 >>> error', error);
      }
    })();
  }, []);

  return (
    <HomeContext.Provider value={courses}>{children}</HomeContext.Provider>
  );
}
