package config

import (
	"path/filepath"

	"github.com/spf13/viper"
)

var (
	configFile = "./../config/config.yaml"
	configType = "yml"
)

type (
	Configuration struct {
		Database Database `mapstructure:"database"`
		Grpc     Grpc     `mapstructure:"grpc"`
		Cache    Cache    `mapstructure:"cache"`
	}

	Database struct {
		Username string `mapstructure:username"`
		Password string `mapstructure:"password"`
		Domain   string `mapstructure:"domain"`
		Port     string `mapstructure:"port"`
		Name     string `mapstructure:"name"`
	}

	Grpc struct {
		Host    string `mapstructure:"host"`
		Port    string `mapstructure:"port"`
		Network string `mapstructure:"network"`
	}

	Cache struct {
		Host     string `mapstructure:"host"`
		Port     string `mapstructure:"port"`
		Password string `mapstructure:"password"`
		Db       int    `mapstructure:"db"`
	}
)

func NewConfig() (*Configuration, error) {
	viper.SetConfigType(configType)
	configPath, err := filepath.Abs(configFile)

	if err != nil {
		return nil, err
	}
	viper.SetConfigFile(configPath)

	err = viper.ReadInConfig()
	if err != nil {
		return nil, err
	}
	conf := &Configuration{}

	err = viper.Unmarshal(conf)

	if err != nil {
		return nil, err
	}
	return conf, nil
}
