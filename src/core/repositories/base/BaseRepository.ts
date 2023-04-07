import Sequelize, { Op } from 'sequelize'
import { IRepo, RepoResult } from '../interfaces/base/IRepo'
import { Result, RepoError } from '../../result/base/BaseResult'
import logger from '../../logger/logger'

export abstract class BaseRepository<M extends Sequelize.Model> implements IRepo<M> {
  protected Model!: Sequelize.ModelCtor<M>
  constructor(Model: Sequelize.ModelCtor<M>) {
    this.Model = Model
  }
  public async search(
    parameterName: string,
    parameterValue: string,
    sortBy: string,
    order: number,
    pageSize: number,
    pageNumber: number
  ): RepoResult<M[]> {
    try {
      const options: Object = {
        where: {
          [parameterName]: parameterValue
        },
        limit: pageSize,
        offset: (pageNumber - 1) * pageSize,
        order: [[sortBy, order]]
      }
      const { count, rows } = await this.Model.findAndCountAll(options)
      return Result.ok(rows)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async getAll(): RepoResult<M[]> {
    try {
      const docs = await this.Model.findAll()
      if (!docs) {
        return Result.fail(new RepoError('Not found', 404))
      }
      return Result.ok(docs)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async deleteById(id: number): RepoResult<M> {
    try {
      const doc = await this.Model.findByPk(id)
      if (doc) {
        const deletedDoc = await this.Model.destroy({
          where: {
            id
          }
        })
        return Result.ok(doc)
      } else {
        return Result.fail(new RepoError('Not found', 404))
      }
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async findByIds(ids: number[]): RepoResult<M[]> {
    try {
      const docs = await this.Model.findAll({
        where: {
          id: {
            [Op.in]: ids
          }
        }
      })
      if (!docs) {
        return Result.fail(new RepoError('Not found', 404))
      }
      return Result.ok(docs)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async deleteByIds(ids: number[]): RepoResult<any> {
    try {
      const docs = await this.Model.findAll({
        where: {
          id: {
            [Op.in]: ids
          }
        }
      })
      if (!docs) {
        return Result.fail(new RepoError('Not found', 404))
      } else {
        const deletedDocs = await this.Model.destroy({
          where: {
            id: {
              [Op.in]: ids
            }
          }
        })
        return Result.ok(deletedDocs)
      }
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async save(doc: M): RepoResult<M> {
    try {
      const savedDoc = await doc.save()
      return Result.ok(savedDoc)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async create(obj: any): RepoResult<M> {
    try {
      const newDoc = await this.Model.create(obj)
      return Result.ok(newDoc)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }

  public async findById(id: number): RepoResult<M> {
    try {
      const doc = await this.Model.findByPk(id)
      if (!doc) {
        return Result.fail(new RepoError('Not found', 404))
      }
      return Result.ok(doc)
    } catch (ex: any) {
      logger.error(ex)
      return Result.fail(new RepoError(ex.message, 500))
    }
  }
}
