.PHONY: build-image build-image-amd push-images

build-image:
	zx scripts/build_images.mjs

push-images:
	docker push --all-tags kittn888/drop-karuta-please

