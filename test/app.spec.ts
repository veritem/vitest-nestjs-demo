import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import supatest from "supertest"
import { describe, beforeEach, it, expect } from 'vitest'

describe('appController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	it('/ (GET)', async () => {
		const response = await supatest(app.getHttpServer()).get('/').expect(200);
		expect(response.text).toBe('Hello!');
	});
});
