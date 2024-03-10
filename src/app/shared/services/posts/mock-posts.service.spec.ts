import { TestBed } from '@angular/core/testing';

import { MockPostsService } from './mock-posts.service';

describe('MockPostsService', () => {
  let service: MockPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
