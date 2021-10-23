// // // import React from 'react';
// // // import { readConfigFile } from 'typescript'
// // //
// // //
// // //
// // //
// // // const Row = ({ title, fetchUrl }: Props) => {
// // //     return (
// // //         <div>
// // //
// // //         </div>
// // //     );
// // // };
// // //
// // // export default Row;
// //
// // import React, { FunctionComponent, useEffect, useState } from 'react';
// // import Axios from "axios";
// // // import { requests } from '../request'
// // import axios from "../axios";
// //
// // interface OwnProps {
// //     title: string;
// //     fetchUrl: string;
// // }
// //
// // type Props = OwnProps;
// //
// // const Row: FunctionComponent<Props> = ({ title, fetchUrl }: Props) => {
// //
// //     const [movies, setMovies] = useState([])
// //
// //
// //     useEffect(() => {
// //         async function fetchData() {
// //             const request = await axios.get("https://api.themoviedb.org/3" + fetchUrl);
// //             console.log(request)
// //             setMovies(request.data.results)
// //             return request;
// //         }
// //         fetchData()
// //     }, [fetchUrl]);
// //
// //
// //
// //   return (
// //       <div>
// //           <h2>{title}</h2>
// //       </div>
// //   );
// // };
// //
// // export default Row;
// import React, { useEffect, useState} from 'react';
// import { readConfigFile } from 'typescript'
// import axios from "../axios";
//
// type Props = {
//     title: string;
//     // fetchUrl: string;
// };
//
// type Movie = {
//
// }
//
// const Row = ({title}: Props) => {
//
//     // const [movies, setMovies] = useState<Movie[]>([])
//     //
//     // async function fetchData() {
//     //     const { data }: Movie = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=c9349dd29b0c396b729d9fc6016daf67&language=en-US&page=1")
//     //     setMovies(data.results)
//     // }
//     //
//     // useEffect(() => {
//     //     fetchData()
//     // },[fetchUrl])
//
//
//   return (
//       <div>
//           <h2>{title}</h2>
//       </div>
//   );
// };
//
// export default Row;
import React, { FunctionComponent } from 'react';

interface OwnProps {}

type Props = OwnProps;

const Row: FunctionComponent<Props> = (props) => {

  return (
      <div>

      </div>
  );
};

export default Row;
