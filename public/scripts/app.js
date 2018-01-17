"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log("connected stateless");

var IndecisionApp = function (_React$Component) {
    _inherits(IndecisionApp, _React$Component);

    function IndecisionApp(props) {
        _classCallCheck(this, IndecisionApp);

        var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

        _this.handleDeleteAll = _this.handleDeleteAll.bind(_this);
        _this.handlePick = _this.handlePick.bind(_this);
        _this.handleAddOption = _this.handleAddOption.bind(_this);
        _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
        _this.state = {
            options: props.options
        };
        return _this;
    }

    _createClass(IndecisionApp, [{
        key: "componentDidMount",
        value: function componentDidMount() {

            try {
                var options = JSON.parse(localStorage.getItem("options"));
                if (options) this.setState(function () {
                    return { options: options };
                });
            } catch (e) {}
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(preProps, preState) {
            console.log("ana hna 1");
            if (preState.options.length !== this.state.options.length) {
                console.log("ana hna 2");
                var options = JSON.stringify(this.state.options);
                localStorage.setItem("options", options);
            }
        }
    }, {
        key: "componentWillUnmout",
        value: function componentWillUnmout() {
            console.log("componentWillUnmout");
        }
    }, {
        key: "handleDeleteAll",
        value: function handleDeleteAll() {
            this.setState(function () {
                return { options: [] };
            });
        }
    }, {
        key: "handlePick",
        value: function handlePick() {
            var random = Math.floor(Math.random() * this.state.options.length);
            alert(this.state.options[random]);
        }
    }, {
        key: "handleDeleteOption",
        value: function handleDeleteOption(option) {
            console.log("ana hna 0");
            var optionToRemove = option.target.textContent;
            this.setState(function (prevState) {
                return {
                    options: prevState.options.filter(function (option) {
                        return optionToRemove !== option;
                    })
                };
            });
        }
    }, {
        key: "handleAddOption",
        value: function handleAddOption(option) {
            if (!option) return "Enter a valid option";else if (this.state.options.indexOf(option) >= 0) return "Option already exists";
            console.log("add");
            this.setState(function (preState) {
                return { options: preState.options.concat(option) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var title = "Indecision";
            var subtitle = 'Put your life in the hands of a computer';
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { title: title, subtitle: subtitle }),
                React.createElement(Action, { hasOptions: this.state.options.length, handlePick: this.handlePick }),
                React.createElement(Options, {
                    options: this.state.options,
                    handleDeleteAll: this.handleDeleteAll,
                    handleDeleteOption: this.handleDeleteOption
                }),
                React.createElement(AddOption, { handleAddOption: this.handleAddOption })
            );
        }
    }]);

    return IndecisionApp;
}(React.Component);

;

// default Props 
IndecisionApp.defaultProps = {
    options: []
};
var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.title
        ),
        React.createElement(
            "h2",
            null,
            props.subtitle
        )
    );
};

var Action = function Action(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handlePick, disabled: !props.hasOptions },
            "What sould I do?"
        )
    );
};

var Options = function Options(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.handleDeleteAll },
            "Remove All"
        ),
        props.options.length === 0 && React.createElement(
            "p",
            null,
            "Please add an option"
        ),
        React.createElement(
            "ol",
            null,
            props.options.map(function (anOption) {
                return React.createElement(Option, { key: anOption, option: anOption, handleDeleteOption: props.handleDeleteOption });
            })
        )
    );
};

var Option = function Option(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "li",
            { onClick: props.handleDeleteOption },
            props.option
        )
    );
};

var AddOption = function (_React$Component2) {
    _inherits(AddOption, _React$Component2);

    function AddOption(props) {
        _classCallCheck(this, AddOption);

        var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

        _this2.handleOption = _this2.handleOption.bind(_this2);
        _this2.state = {
            error: undefined
        };
        return _this2;
    }

    _createClass(AddOption, [{
        key: "handleOption",
        value: function handleOption(e) {
            e.preventDefault();
            var option = e.target.elements.option.value.trim();
            var error = this.props.handleAddOption(option);
            e.target.elements.option.value = '';
            this.setState(function () {
                return { error: error };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                this.state.error && React.createElement(
                    "p",
                    { style: { color: "#ff0000" } },
                    this.state.error
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.handleOption },
                    React.createElement("input", { type: "text", name: "option" }),
                    React.createElement("input", { type: "submit" })
                )
            );
        }
    }]);

    return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, { options: [] }), document.getElementById("say"));
