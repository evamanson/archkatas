########################################################################################

ENV = production
TRANSPORT = ssh
.PHONY = all deps build release

########################################################################################

all: deps build

deps:
	yarn install --prefer-offline

build:
	yarn build --if-present

release:
	ansible-playbook deploy.yml -i environments/$(ENV) \
		--extra-vars="env=$(ENV)" \
		-c $(TRANSPORT) 

########################################################################################
