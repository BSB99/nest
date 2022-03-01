import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getAll', () => {
    it('should return an array', () => {
      const result = service.getAll();

      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should return a movie', () => {
      service.create({
        title: 'Test',
        geners: ['test'],
        year: 2000,
      });
      const result = service.getOne(1);

      expect(result).toBeDefined();

      expect(result.id).toEqual(1);
    });
    it('should throw 404 error', () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual('해당하신 번호의 영화를 찾을 수 없습니다.');
      }
    });
  });

  describe('deleteOne', () => {
    it('deletes a movie', () => {
      service.create({
        title: 'Test',
        geners: ['test'],
        year: 2000,
      });
      const beforDelete = service.getAll().length; //영화 전체를 불러온다.
      service.deleteOne(1); // 그중 1번의 영화를 삭제
      const afterDelete = service.getAll().length; // 1번의 영화를 삭제한 후 결과

      expect(afterDelete).toBeLessThan(beforDelete);
      // 이후의 movie length가 allMovies의 길이보다 적을거라고 예상
    });
    it('should return a 404', () => {
      try {
        service.deleteOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException);
      }
    });
  });

  describe('create', () => {
    it('should create a movie', () => {
      service.create({
        title: 'Test',
        geners: ['test'],
        year: 2000,
      });
    });
  });
});
