import { RepoError, Result } from '../../../result/base/BaseResult'

export type RepoResult<M> = Promise<Result<M | undefined, RepoError | undefined>>

export interface IRepo<M> {
  save(model: M): RepoResult<M>
  create(obj: any): RepoResult<M>
  findById(id: number): RepoResult<M>
  search(
    parameterName: string,
    parameterValue: string,
    sortBy: string,
    order: number,
    pageSize: number,
    pageNumber: number
  ): RepoResult<M[]>
  getAll(): RepoResult<M[]>
  deleteById(id: number): RepoResult<M>
  findByIds(ids: number[]): RepoResult<M[]>
  deleteByIds(ids: number[]): RepoResult<any>
}
