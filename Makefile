.PHONY: build-image build-image-amd push-images

build-image:
	docker build -t kittn888/drop-karuta-please .

build-image-amd:
	docker buildx build --platform linux/amd64 -t kittn888/drop-karuta-please:amd64 .

push-images:
	docker push --all-tags kittn888/drop-karuta-please

