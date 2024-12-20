/// <reference path="../../references.d.ts" />
/// <reference path="./types/play-review.d.ts" />
/// <reference path="./types/play-services-tasks.d.ts" />

declare class NSCAppStore extends NSObject {

	static alloc(): NSCAppStore; // inherited from NSObject

	static new(): NSCAppStore; // inherited from NSObject

	requestReview(): void;
}