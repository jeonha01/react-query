import { useQueries, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { usePostsQuery } from './hooks/usePosts'


const ReactQueryPage = () => {

    const ids = [1, 2, 3, 4]

    const fetchPostDetail = (id) => {
        return axios.get(`http://localhost:3004/posts/${id}`)
    }

    const result = useQueries({
        queries: ids.map((id) => {
            return {
                queryKey: ["posts", id],
                queryFn: () => fetchPostDetail(id)
            }
        }),
        combine: (result) => {
            return {
                data: result.map((result) => result.data)
            }
        }
    })

    console.log(result)

    // const { data, isLoading, isError, error, refetch } = usePostsQuery()
    // console.log(data, isLoading)

    // if (isLoading) {
    //     return <h1>Loading...</h1>
    // }
    // if (isError) {
    //     return <h1>{error.message}</h1>
    // }
    return (
        <div>
            {/* {data?.map(((item) => <div>{item.title}</div>))}
            <button onClick={refetch}>post리스트 다시 들고오기</button> */}
        </div>
    )
}

export default ReactQueryPage